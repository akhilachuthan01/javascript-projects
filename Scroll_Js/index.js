import Scrollbar from 'smooth-scrollbar';

var options = {
	damping: 0.05,
	alwaysShowTracks: false,
};

Scrollbar.init(document.querySelector('#my-scrollbar'), options);
Scrollbar.init(document.querySelector('#custom'), options);
