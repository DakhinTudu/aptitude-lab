/**
 * Aptitude & Reasoning Lab — Shared Utilities
 * Safe LocalStorage, Self-test runner, Accessible announcer, and Practice state helpers.
 * Fully vanilla, 0 dependencies, works completely offline.
 */

const LabCommon = (() => {
  // Safe Storage with in-memory fallback
  const memoryStore = {};
  const isStorageAvailable = (() => {
    try {
      const testKey = "__lab_test_storage__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  })();

  const storage = {
    get(key, defaultValue = null) {
      if (isStorageAvailable) {
        try {
          const item = window.localStorage.getItem(key);
          return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
          console.warn("Storage read error, using fallback", e);
        }
      }
      return memoryStore[key] !== undefined ? memoryStore[key] : defaultValue;
    },
    set(key, value) {
      if (isStorageAvailable) {
        try {
          window.localStorage.setItem(key, JSON.stringify(value));
          return true;
        } catch (e) {
          console.warn("Storage write error, using memory fallback", e);
        }
      }
      memoryStore[key] = value;
      return true;
    },
    remove(key) {
      if (isStorageAvailable) {
        try {
          window.localStorage.removeItem(key);
        } catch (e) {
          console.warn("Storage remove error", e);
        }
      }
      delete memoryStore[key];
    }
  };

  // Live region announcer for screen readers
  let liveRegion = null;
  function announce(message) {
    if (!liveRegion) {
      liveRegion = document.getElementById("a11y-live-region");
      if (!liveRegion) {
        liveRegion = document.createElement("div");
        liveRegion.id = "a11y-live-region";
        liveRegion.className = "sr-only";
        liveRegion.setAttribute("aria-live", "polite");
        liveRegion.setAttribute("aria-atomic", "true");
        document.body.appendChild(liveRegion);
      }
    }
    liveRegion.textContent = "";
    setTimeout(() => {
      liveRegion.textContent = message;
    }, 50);
  }

  // Self-test runner and banner renderer
  function runAndRenderSelfTests(testFn, bannerElementId = "test-status-banner") {
    const banner = document.getElementById(bannerElementId);
    let results = { passed: 0, failed: 0, failures: [] };

    try {
      if (typeof testFn === "function") {
        results = testFn();
      } else {
        throw new Error("No test function provided");
      }
    } catch (err) {
      results.failed = 1;
      results.failures.push({ name: "Exception during test run", error: err.message });
    }

    if (results.failed > 0) {
      console.error("⚠️ Self-tests failed:", results);
      if (banner) {
        banner.className = "test-banner danger";
        banner.innerHTML = `
          <strong>⚠️ Model self-tests failed (${results.failed} failed, ${results.passed} passed).</strong>
          <span>This lesson may contain mathematical or logical inaccuracies. Scored practice is disabled. Check console for failure details.</span>
        `;
        banner.classList.remove("hidden");
      }
      // Disable practice submission buttons if tests fail
      document.querySelectorAll(".practice-submit-btn").forEach(btn => {
        btn.disabled = true;
        btn.title = "Practice disabled because self-tests failed";
      });
    } else {
      console.info(`✓ Self-tests passed (${results.passed} tests passed, 0 failures)`);
      if (banner) {
        banner.className = "test-banner success hidden";
        banner.textContent = `All ${results.passed} model self-tests passed.`;
      }
    }

    return results;
  }

  // Practice progress tracker per topic
  function getTopicProgress(topicId) {
    return storage.get(`lab_progress_${topicId}`, {
      attempts: 0,
      correct: 0,
      independentCorrect: 0,
      totalTimeSec: 0,
      errorsByCategory: {
        concept: 0,
        method: 0,
        arithmetic: 0,
        misread: 0,
        time_guess: 0
      },
      lastPracticed: null
    });
  }

  function recordTopicAttempt(topicId, { isCorrect, isIndependent, timeSec, errorCategory }) {
    const p = getTopicProgress(topicId);
    p.attempts += 1;
    if (isCorrect) {
      p.correct += 1;
      if (isIndependent) p.independentCorrect += 1;
    } else if (errorCategory && p.errorsByCategory[errorCategory] !== undefined) {
      p.errorsByCategory[errorCategory] += 1;
    }
    p.totalTimeSec += (timeSec || 0);
    p.lastPracticed = new Date().toISOString();
    storage.set(`lab_progress_${topicId}`, p);
    return p;
  }

  function resetTopicProgress(topicId) {
    storage.remove(`lab_progress_${topicId}`);
  }

  // Clean number rounding
  function round(num, decimals = 2) {
    if (isNaN(num)) return NaN;
    const factor = Math.pow(10, decimals);
    return Math.round((num + Number.EPSILON) * factor) / factor;
  }

  // Timer helper
  class PracticeTimer {
    constructor(onTick) {
      this.onTick = onTick;
      this.seconds = 0;
      this.intervalId = null;
      this.running = false;
    }

    start() {
      this.stop();
      this.seconds = 0;
      this.running = true;
      if (this.onTick) this.onTick(this.seconds);
      this.intervalId = setInterval(() => {
        this.seconds += 1;
        if (this.onTick) this.onTick(this.seconds);
      }, 1000);
    }

    stop() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.running = false;
      return this.seconds;
    }

    reset() {
      this.stop();
      this.seconds = 0;
      if (this.onTick) this.onTick(0);
    }

    format() {
      const mins = Math.floor(this.seconds / 60);
      const secs = this.seconds % 60;
      return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
  }

  return {
    storage,
    announce,
    runAndRenderSelfTests,
    getTopicProgress,
    recordTopicAttempt,
    resetTopicProgress,
    round,
    PracticeTimer
  };
})();

if (typeof window !== "undefined") {
  window.LabCommon = LabCommon;
}
