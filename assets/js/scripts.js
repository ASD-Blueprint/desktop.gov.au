$( document ).ready( function() {
    $('html').removeClass('no-js').addClass('js');
    $('table:not(.au-table)').addClass('au-table');
    $('thead:not(.au-table__head)').addClass('au-table__head');
    $('tbody:not(.au-table__body)').addClass('au-table__body');
    $('tr:not(.au-table__row)').addClass('au-table__row');
    $('th:not(.au-table__header)').addClass('au-table__header');
    $('td:not(.au-table__cell)').addClass('au-table__cell');


    if ( $('#toc-container > ul > li').length > 0 ) {
        /*
        if ($('#sidebar-nav-container > ul.au-link-list > li.active').length > 0)
            $('#sidebar-nav-container > ul.au-link-list > li.active').append( $('div#toc-container > ul.au-link-list') );
        else
            $('div#toc-container').addClass('hidden');
        */

        $('#back-to-top a').on( 'click', function() {
            $('html, body').animate({
                    scrollTop: 0
            }, 'fast');
        });
        $(window).scroll(function() {
            if ( window.scrollY > $(window).height() ) {
                    $('#back-to-top').addClass('visible');
            }
            else {
                    $('#back-to-top').removeClass('visible');
            }
        });

        $('#toc-container').prepend(
            '<h2 class="au-sidenav__title">On this page</h2>',
            $('ul#markdown-toc').addClass('au-link-list')
        )
        .scrollspy({
            offset: -25
        })
        .affix({
            offset: {
                top: $('header.au-header').outerHeight(true) + 100,
            }
        });
    }

});