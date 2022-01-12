$(".reviews-switcher__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const curItem = $closest(".review-switcher__item");

    curItem.addClass("active").siblings().removeClass("active");
});