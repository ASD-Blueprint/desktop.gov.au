$( document ).ready( function() {
        $('html').removeClass('no-js').addClass('js');
        $('table:not(.au-table)').addClass('au-table');
        $('thead:not(.au-table__head)').addClass('au-table__head');
        $('tbody:not(.au-table__body)').addClass('au-table__body');
        $('tr:not(.au-table__row)').addClass('au-table__row');
        $('th:not(.au-table__header)').addClass('au-table__header');
        $('td:not(.au-table__cell)').addClass('au-table__cell');
        $('table.au-table').wrap( '<div class="responsive-table"></div>');

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
});