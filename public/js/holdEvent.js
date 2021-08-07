class ClickAndHold {
  /**
   *
   * @param {EventTarget} target
   * @param {Function} callback
   */
  constructor(target, callback) {
    this.target = target;
    this.callback = callback;
    this.isHeld = false;
    this.activeHoldTimeoutId = null;

    ['mousedown', 'click', 'touchstart'].forEach(type => {
      this.target.addEventListener(type, this._onHoldStart.bind(this), {
        passive: true,
      });
    });
    ['mouseup', 'mouseleave', 'mouseout', 'touchend', 'touchcancel'].forEach(
      type => {
        this.target.addEventListener(type, this._onHoldEnd.bind(this), {
          passive: true,
        });
      }
    );
  }

  _onHoldStart() {
    this.isHeld = true;
    this.activeHoldTimeoutId = setTimeout(() => {
      if (this.isHeld) {
        this.callback();
      }
    }, 1);
  }

  _onHoldEnd() {
    this.isHeld = false;
    clearTimeout(this.activeHoldTimeoutId);
  }
  /**
   *
   * @param {EventTarget} target
   * @param {Function} callback
   */
  static apply(target, callback) {
    new ClickAndHold(target, callback);
  }
}
