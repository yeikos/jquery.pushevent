jQuery.pushevent v1.0
==================================================

What is this?
--------------------------------------

It's a jQuery plugin that allows reorder events easily.

How to use
--------------------------------------

	$(selector).pushEvent(events, position); // change event position (bind)

	$(selector).pushEvent(events, selector, position); // change event position (delegate)

	Position by default is 0 (the first)

	Selector is optional, only it must be used if event is delegate

Demo online
--------------------------------------

http://jsfiddle.net/yeikos/uTQT8/

Example
--------------------------------------

	<button>Click me</button>

	<script type="text/javascript">

		$(function() {

			$('button').on('click.first', function() {

				alert('1');

			}).on('click.second', function() {

				alert(2);

			}).pushEvent('click.second');
			
		});
		
	</script>
