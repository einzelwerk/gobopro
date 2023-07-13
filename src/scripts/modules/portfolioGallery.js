import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export function initPortfolioGallery() {
    Fancybox.bind('[data-fancybox]', {
        compact: false,
        idle: false,

        animated: false,
        showClass: false,
        hideClass: false,

        dragToClose: false,
        contentClick: false,

        Images: {
            zoom: false,
        },

        Toolbar: {
            display: {
                left: [],
                right: ['close'],
            },
        },

        Thumbs: {
            type: 'classic',
        },
    });
}
