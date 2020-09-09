/*!
 * Affix jQuery Plugin
 * @version 2.0.0
 * @author  Jason Alvis
 * @url     https://github.com/jasonalvis/affix
 */
;(function( $, window, document, undefined ){
  "use strict";

  /**
   * Affix constructor
   * @param {HTMLElement|jQuery} element - The element to create the affix for
   * @param {Object} options             - The options
   */
  var Affix = function( element, options ){
    /**
     * DOM affix element
     * @type {Object}
     */
    this.element = element;

    /**
     * DOM affix element wrapped in jQuery
     * @type {Object}
     */
    this.$element = $(element);

    /**
     * Scroll position
     * @type {Number}
     */
    this.scrollPosition = 0;

    /**
     * Locked to
     * @type {Object}
     */
    this.lockedTo = null;

    /**
     * Current options
     * @type {Object}
     */
    this.options = options;

    /**
     * Init
     */
    this.init();
  };

  /**
   * Default options
   * @type {Object}
   */
  Affix.prototype.defaults = {
    offset: 0,
    target: window
  };

  /**
   * Init the affix
   * @return {Object}
   */
  Affix.prototype.init = function() {
    this.config = $.extend({}, this.defaults, this.options);

    // Target
    this.$target = $(this.config.target);

    // Bind checkPosition on scroll
    this.$target.on("scroll", $.proxy(this.checkPosition, this));

    // Bind checkPosition without scrolling on initial page load
    this.checkPosition();

    return this;
  };

  /**
   * Detect scroll direction
   * @return {String} - The direction of the window scrolling
   */
  Affix.prototype.detectDirection = function() {
    var start = this.$target.scrollTop(),
        direction;

    if (start > this.scrollPosition) {
      direction = "down";
    } else {
      direction = "up";
    }

    this.scrollPosition = start;

    return direction;
  };

  /**
   * Get state
   * @param  {Number} scrollHeight  - The height of the document
   * @param  {Number} elementHeight - The height of the affix element
   * @param  {Number} offsetTop     - The options offset top
   * @param  {Number} offsetBottom  - The options offset bottom
   * @return {String}               - The state of the affix element
   */
  Affix.prototype.getState = function(scrollHeight, elementHeight, offsetTop, offsetBottom) {
    var elOffset     = this.$element.offset(),
        direction    = this.detectDirection(),
        scrollTop    = this.$target.scrollTop(),
        windowHeight = this.$target.height(),
        windowDiff   = windowHeight - elementHeight;

    windowDiff = windowDiff < 0 ? 0 : windowDiff;

    // Top of the context reached
    if(scrollTop <= offsetTop){
      return "default";
    }

    // Bottom of the context reached
    if (scrollTop + windowHeight >= scrollHeight - offsetBottom + windowDiff){
      return "bottom-absolute";
    }

    // If the sidebar is tall enough
    if(windowHeight < elementHeight){
      // Bottom of sidebar reached
      if(direction === "down" && this.lockedTo === null && windowHeight + scrollTop > elOffset.top + elementHeight){
        return "bottom-fixed";
      // If sidebar is fixed to top and we scroll down absolute the sidebar so they don't move
      } else if(direction === "down" && this.lockedTo === "top"){
        return "absolute";
      // Top of sidebar reached
      } else if(direction === "up" && this.lockedTo === null && elOffset.top >= scrollTop){
        return "top-fixed";
      // If sidebar is fixed to bottom and we scroll up absolute the sidebar so they don't move
      } else if(direction === "up" && this.lockedTo === "bottom"){
        return "absolute";
      }
    } else {
      if(this.lockedTo === null){
        return "top-fixed";
      }
    }

    return false;
  };

  /**
   * Set position
   * @param {String} position - Set the position of the affix element
   */
  Affix.prototype.setPosition = function(position) {
    if(position === "bottom-fixed"){
      this.$element.css({
        position: "fixed",
        top:      "auto",
        bottom:   "0px"
      });

      this.lockedTo = "bottom";
    } else if(position === "bottom-absolute"){
      this.$element.css({
        position: "absolute",
        top:      "auto",
        bottom:   "0px"
      });

      this.lockedTo = null;
    } else if(position === "top-fixed"){
      this.$element.css({
        position: "fixed",
        top:      "1em",
        bottom:   "auto"
      });

      this.lockedTo = "top";
    } else if(position === "default"){
      this.$element.css({
        position: "relative",
        top:      "auto",
        bottom:   "auto"
      });

      this.lockedTo = null;
    } else if(position === "absolute"){
      this.$element.css({
        position: "absolute",
        top:      (this.$element.offset().top - this.$element.parent().offset().top) + "px",
        bottom:   "auto"
      });

      this.lockedTo = null;
    }
  };

  /**
   * Check position
   * @return {String} - Get the position of the affix element
   */
  Affix.prototype.checkPosition = function() {
    // Return if the element is hidden
    if (!this.$element.is(":visible")){
        return;
    }

    var offset        = this.config.offset,
        offsetTop     = offset.top,
        offsetBottom  = offset.bottom,
        elementHeight = this.$element.height(),
        scrollHeight  = Math.max( $(document).height(), $(document.body).height() ),
        position;

    // If offset is not an object a single number has been provided
    // set the offset to be applied to both top and bottom.
    if (typeof offset != "object") {
      offsetBottom = offsetTop = offset;
    }

    // Function provided
    if (typeof offsetTop == "function") {
      offsetTop = offset.top(this.$element);
    }

    // Function provided
    if (typeof offsetBottom == "function") {
      offsetBottom = offset.bottom(this.$element);
    }

    // Set position
    position = this.getState(scrollHeight, elementHeight, offsetTop, offsetBottom);

    // Only run if it doesn't return false
    if(position){
      this.setPosition(position);
    }
  };

  /**
   * Create a shorthand reference point for our defaults
   * @type {Object}
   */
  Affix.defaults = Affix.prototype.defaults;

  /**
   * jQuery Affix interface
   * @param  {Object} options - The options
   * @return {Object}         - The affix object
   */
  $.fn.affix = function(options) {
    var args = Array.prototype.slice.call(arguments, 1);

    return this.each(function() {
      var item = $(this),
          data = item.data('affix');

      if(!data) {
        // Create affix data if not created
        item.data('affix', new Affix(this, options));
      } else {
        // Otherwise check arguments for method call
        if(typeof options === 'string') {
          data[options].apply(data, args);
        }
      }
    });
  };

})( jQuery, window, document );
