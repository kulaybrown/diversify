import "slick-carousel";
import $ from "jquery";

class Hero {
  constructor(element) {
    this.$element = $(element);
    this.$carouselText = this.$element.find(".slider-text");
    this.$carouselImage = this.$element.find(".slider-image");

    this.initCarousel();
  }

  initCarousel() {
    this.$carouselText.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: this.$carouselImage,
    });

    this.$carouselImage.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: this.$carouselText,
      nextArrow: this.$element.find(".slider-image-controls__next-button"),
      prevArrow: this.$element.find(".slider-image-controls__previous-button"),
    });
  }
}

$(".section-hero").each((index, element) => new Hero(element));
