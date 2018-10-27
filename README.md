jQuery.pushevent v1.0.1
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
	
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js"></script>
	<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yeikos/jquery.pushevent/jquery.pushevent.js"></script>

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
