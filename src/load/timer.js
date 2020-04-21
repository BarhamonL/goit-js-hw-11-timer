`use strict`;

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      days: document.querySelector('[data-value="days"]'),
      hours: document.querySelector('[data-value="hours"]'),
      mins: document.querySelector('[data-value="mins"]'),
      secs: document.querySelector('[data-value="secs"]'),
    };
    this.initializeClock();
  }
  getTimeRemaining(t) {
    const days = Math.floor(t / (1000 * 60 * 60 * 24));
    const hours = this.addition(
      Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.addition(
      Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.addition(Math.floor((t % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }

  addition(value) {
    return String(value).padStart(2, '0');
  }
  initializeClock() {
    const endTime = this.targetDate;
    const showTimer = setInterval(() => {
      const currentTime = Date.now();
      this.timeInterval = endTime - currentTime;
      if (this.timeInterval <= 0) {
        clearInterval(this.showTimer);
        return;
      }
      this.updateClock(this.timeInterval);
    }, 1000);
  }
  updateClock() {
    const { days, hours, mins, secs } = this.getTimeRemaining(
      this.timeInterval,
    );

    this.refs.days.textContent = `${days}`;
    this.refs.hours.textContent = `${hours}`;
    this.refs.mins.textContent = `${mins}`;
    this.refs.secs.textContent = `${secs}`;
  }
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2020'),
});
