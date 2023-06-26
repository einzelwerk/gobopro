<section class="section">
    <div class="section-heading">
        {if $title}
            <h3 class="section-heading__title">{$title}</h3>
        {/if}
        {if $description}
            <p class="section-heading__desc">{$description}</p>
        {/if}
    </div>
    <div class="category-tabs">
        <div class="container">
            <div class="swiper js-tabs-slider tabs-slider">
                <div class="swiper-wrapper">
                    {foreach $tabs as $idx => $tab}
                        <div class="swiper-slide tabs-slide">
                            <div class="btn btn_default tabs-slider__item" role="tab" aria-selected="{!$idx}"
                                aria-controls="tab-{++$idx}">{$tab.title}</div>
                        </div>
                    {/foreach}
                </div>
                <div class="container">
                    <div class="swiper-scrollbar"></div>
                </div>
            </div>
        </div>
        {foreach $tabs as $idx => $tab}
            <div class="category-tabs__content container {if $idx > 0} is-hidden {/if}" {if $idx > 0} loading="lazy" {/if}
                role="tablist" id="tab-{++$idx}">
                <div class="gallery-grid">
                    {set $offset = 0}
                    {foreach [0,1,2] as $item}
                        {set $count = 3}
                        <div class="gallery-grid__col">
                            {foreach $tab.blocks as $blocks_index => $block}
                                {if $blocks_index < $offset} {continue} {/if}
                                {if !$count} {continue} {/if}
                                {set $offset = ++$offset}

                                {if $block.title}
                                    <div class="gallery-grid__item gallery-grid__item_text">
                                        <h3 class="gallery-grid__title">{$block.title}</h3>
                                        {if $block.description}
                                            <p class="gallery-grid__desc">{$block.description}</p>
                                        {/if}
                                        {if $block.btn_text}
                                            <button type="button" class="gallery-grid__btn btn btn btn_white js-open-modal"
                                                data-modal="#gallery" data-title="{$tab.form_title}">{$block.btn_text}</button>
                                        {/if}
                                    </div>
                                    {set $count = --$count}
                                    {continue}
                                {/if}

                                {if $block.video}
                                    <div class="gallery-grid__item gallery-grid__item_video">
                                        <div class="gallery-grid__play">
                                            <img loading="lazy" src="/assets/images/play.svg" alt="play">
                                        </div>
                                        <video class="gallery-grid__video" src="{$block.video}"></video>
                                        <picture class="gallery-grid__image">
                                            <img loading="lazy" src="{$block.img|phpthumbon:'w=880&f=webp&q=100'}" alt="{$block.alt}">
                                        </picture>
                                    </div>
                                {else}
                                    <div class="gallery-grid__item">
                                        <a href="{$block.img|phpthumbon:'f=webp&q=100'}" data-fancybox>
                                            <picture class="gallery-grid__image">
                                                <img loading="lazy" src="{$block.img|phpthumbon:'w=880&f=webp&q=100'}"
                                                    alt="{$block.alt}">
                                            </picture>
                                        </a>
                                    </div>
                                {/if}

                                {set $count = --$count}
                            {/foreach}
                        </div>
                    {/foreach}
                </div>
                <button class="btn button js-show-gallery show-gallery">Mehr photos</button>
            </div>
        {/foreach}
    </div>
</section>