/*!
 * @name jQuery.pushEvent v1.0
 * @autor yeikos
 
 * Copyright 2012 - https://github.com/yeikos/jquery.pushevent
 * GNU General Public License
 * http://www.gnu.org/licenses/gpl-3.0.txt
 */

;(function($, undefined) {

	$.fn.pushEvent = function(events, selector, position) {

		var data, items = {};

		// Es necesario que el elemento tenga eventos

		if (!(data = $(this).data('events')))

			return;

		// El argumento selector sólo es utilizado bajo los eventos "delegate"

		if (arguments.length <= 2) {

			position = selector;
			selector = undefined;

		}

		// La posición debe de ser un número entero (positivo o negativo)

		position = parseInt(position, 10);

		// Separamos el argumento events por espacios y vamos agrupando todos los marcadores (namespace) por nombre de evento

		$.each((events || '').split(/\s+/), function(index, item) {

			var temp = item.split(/\.+/),
				eventName = temp[0],
				namespace = temp[1];

			if (!eventName || !namespace)

				return;

			if (!items[eventName])

				items[eventName] = [];

			items[eventName].push(namespace);

		});

		// Recorremos los nombres de los eventos

		$.each(items, function(eventName, namespace) {

			var devent, sevent;

			// El elemento debe de tener almenos un evento enlazado con dicho nombre

			if (!(devent = data[eventName]) || !(sevent = devent.length))

				return;

			// Calculamos la posición (reusamos la variable eventName)

			eventName = isNaN(position) ? 0 : (position < 0) ? (sevent-position%(sevent+1)) : (position%(sevent+1));

			// Cambiamos la posición de los eventos

			$.each(namespace, function(index, name) {

				$.each(devent, function(subindex, item) {

					if ((namespace.length && item.namespace == name) && (!selector || (selector && item.selector == selector)))

						devent.splice(eventName, 0, devent.splice(subindex, 1)[0]);

				});

			});

		});

	};

})(jQuery);