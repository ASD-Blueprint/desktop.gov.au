$( document ).ready( function() {
	$('html').removeClass('no-js').addClass('js');
	$('table:not(.au-table)').addClass('au-table');
	$('thead:not(.au-table__head)').addClass('au-table__head');
	$('tbody:not(.au-table__body)').addClass('au-table__body');
	$('tr:not(.au-table__row)').addClass('au-table__row');
	$('th:not(.au-table__header)').addClass('au-table__header');
	$('td:not(.au-table__cell)').addClass('au-table__cell');
	$('table.au-table').wrap( '<div class="responsive-table"></div>');
	$('#content-area table.sortable').tablesorter();

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

	$('body.e8 .maturity').each( function() {
		text = this.innerText.split(': ');
		$(this).html('<span class="maturity-label">' + text[0].trim() + ':</span> <span class="maturity-rating">' + text[1].trim() + '</span>')
	});

	function show_search_results(keywords) {
		$('#search-results ul li').remove();
		$('#search-results').show();

		if (keywords.trim().length > 0) {
			search_index.search(keywords, {hitsPerPage: 100}).then(({hits, nbHits}) => {
				$html_num_matches = nbHits + ' match';
				if ( nbHits != 1 ) $html_num_matches += 'es';
				$html_num_matches += ' found';
				$('#overlay-number-of-results').html($html_num_matches);
				
				$.each(hits, function(key, result) {
					href = result.url;
					if ('anchor' in result) href += '#' + result.anchor;

					section = '';
					if ('headings' in result)
						if (result.headings.length > 0)
							section = '<p class="metadata">Heading: ' + result.headings.join(' &rarr; ') + '</p>';
					
					title = ('title' in result) ? result.title : '';
					body = ('content' in result) ? result.content : '';
					if ('_highlightResult' in result) {
						if ('title' in result._highlightResult) title = result._highlightResult.title.value;
						if ('content' in result._highlightResult) body =  result._highlightResult.content.value;
					}

					$('#search-results ul').append('<li><h2><a href="' + href + '">' + title + '</a></h2><p>' + body + '</p>' + section + '</li>');
				});
			});
			$('#overlay-keywords').blur();
		}
		else {
			$('#overlay-keywords').focus();
		}
	}

	$('#site-search').submit(function(e) {
		e.preventDefault();
		keywords = sanitizeHTML($('#keywords').val());

		search_input = '<form id="overlay-site-search" role="search" aria-label="sitewide" class="au-search au-search--icon"><label for="keywords" class="au-search__label">Search this website</label><input type="search" autocomplete="off" placeholder="Search this site" id="overlay-keywords" name="search" class="au-text-input" value="' + keywords + '"><div class="au-search__btn"><button class="au-btn" type="submit"><span class="au-search__submit-btn-text">Search</span></button></div></form>';
		if ( $('#search-results').length == 0 ) {
			search_results_div = $('<div/>', {
				id: 'search-results',
				class: 'au-body'
			}).appendTo('body');
			search_results_div.append('<div class="container"><div class="row"><div class="col-sm-12"><span id="close-search" title="Close search overlay">x</span><h1>Search results</h1>' + search_input + '<p id="overlay-number-of-results"></p><ul></ul><p id="overlay-search-attribution" class="text-right"><img src="/assets/images/search-by-algolia-light-background.png" alt="Search powered by algolia"></p></div></div></div>');
			$('#overlay-keywords').focus();
		}

		show_search_results(keywords);
	});

	$(document).on('submit', '#overlay-site-search', function(e) {
		e.preventDefault();
		keywords = sanitizeHTML($('#overlay-keywords').val());
		show_search_results(keywords);
	});

	$(document).on('click', '#close-search', function() {
		$('#search-results').remove();
	});

	var sanitizeHTML = function (str) {
		return str.replace(/[^\w. ]/gi, function (c) {
			return '&#' + c.charCodeAt(0) + ';';
		});
	};
});