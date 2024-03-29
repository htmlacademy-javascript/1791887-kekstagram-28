import {imageUploadForm, imageUploadPreview } from './scale.js';

const SLIDER_PREFERENCE = [ {
	range: {
		min: 0,
		max: 1,
	},
	start: 1,
	step: 0.1,
	connect: 'lower',
},
{
	range: {
		min: 0,
		max: 1,
	},
	start: 1,
	step: 0.1,
	connect: 'lower',
},
{
	range: {
		min: 0,
		max: 100,
	},
	start: 100,
	step: 1,
	connect: 'lower',
},
{
	range: {
		min: 0,
		max: 3,
	},
	start: 3,
	step: 0.1,
	connect: 'lower',
},
{
	range: {
		min: 1,
		max: 3,
	},
	start: 3,
	step: 0.1,
	connect: 'lower',
}
];

const slider = imageUploadForm.querySelector('.effect-level__slider');
const effectLevelValue = imageUploadForm.querySelector('.effect-level__value');
const effectsList = imageUploadForm.querySelector('.effects__list');
const imageEffectLevel = imageUploadForm.querySelector('.img-upload__effect-level');
let effect = ' ';

function createSlider () {
	noUiSlider.create(slider, {
		range: {
			min: 0,
			max: 100,
		},
		start: 100,
		step: 1,
		connect: 'lower',
		format: {
			to: function (value) {
				if (Number.isInteger(value)) {
					return value.toFixed(0);
				}
				return value.toFixed(1);
			},
			from: function (value) {
				return parseFloat(value);
			},
		},
	});
}

let measure = '';
function createStyleEffect() {
	slider.noUiSlider.on('update', () => {
		const gettingSliderValue = slider.noUiSlider.get();
		effectLevelValue.value = gettingSliderValue;
		imageUploadPreview.style.filter = `${effect}(${gettingSliderValue}${measure})`;
	});
}
const showSlider = () => {
	imageEffectLevel.classList.remove('hidden');
};
const resetSlider = () => {
	imageEffectLevel.classList.add('hidden');
	imageUploadPreview.style.filter = 'none';
};

const onChangeSlider = () => {
	imageEffectLevel.classList.remove('.hidden');
	switch (effect) {
	case 'none': resetSlider();
		break;
	case 'chrome': slider.noUiSlider.updateOptions(SLIDER_PREFERENCE[0]);
		showSlider();
		effect = 'grayscale';
		createStyleEffect();
		break;
	case 'sepia': slider.noUiSlider.updateOptions(SLIDER_PREFERENCE[1]);
		showSlider();
		createStyleEffect();
		break;
	case 'marvin': slider.noUiSlider.updateOptions(SLIDER_PREFERENCE[2]);
		showSlider();
		effect = 'invert';
		measure = '%';
		createStyleEffect();
		break;
	case 'phobos': slider.noUiSlider.updateOptions(SLIDER_PREFERENCE[3]);
		showSlider();
		effect = 'blur';
		measure = 'px';
		createStyleEffect();
		break;
	case 'heat': slider.noUiSlider.updateOptions(SLIDER_PREFERENCE[4]);
		showSlider();
		effect = 'brightness';
		createStyleEffect();
		break;
	}
};

createSlider();
effectsList.addEventListener('change', (evt) => {
	const currentEffect = evt.target.classList.contains('effects__radio');
	if (!currentEffect) {
		return ;
	}
	effect = evt.target.value;
	measure = '';
	onChangeSlider();
});
export {resetSlider};
