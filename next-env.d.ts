// The elements you list here will be accepted, attributes don't matter
declare namespace JSX {
	interface IntrinsicElements {
		'amp-img': AmpImg;
		'amp-install-serviceworker': any;
		'amp-state': AmpState;
		'amp-script': AmpScript;
	}
}
// The elements you list here will be accepted, and only with the attributes that you include here
declare namespace JSX {
	interface AmpImg {
		alt?: string;
		src?: string;
		width?: string;
		height?: string;
		layout?: string;
	}
	interface AmpState {
		id?: string,
		children?: any,
		src?: string
	}
	interface AmpScript {
		id?: string,
		children?: any,
		layout?: string,
		width?: string,
		height?: string,
		script?: any,
		src?: string
	}
}
