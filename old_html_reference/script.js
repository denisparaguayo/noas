document.addEventListener('DOMContentLoaded', () => {
	const menuToggle = document.getElementById('menu-toggle');
	const menu = document.getElementById('menu');

	menuToggle.addEventListener('click', () => {
		// Alterna las clases para mostrar/ocultar el menú
		menu.classList.toggle('hidden');
		menu.classList.toggle('flex');
		menu.classList.toggle('flex-col');
		menu.classList.toggle('text-white');
	});

	// Cierra el menú al hacer clic en cualquier enlace
	menu.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			menu.classList.add('hidden');
			menu.classList.remove('flex', 'flex-col');
		});
	});
});

document
	.getElementById('whatsappButton')
	.addEventListener('click', function () {
		const name = document.getElementById('name').value;
		const service = document.getElementById('service').value;
		const message = `Name: ${name}\nService: ${service}`;
		const encodedMessage = encodeURIComponent(message);
		const whatsappUrl = `https://wa.me/12403067480?text=${encodedMessage}`;
		window.open(whatsappUrl, '_blank');
	});
