import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

// register block type
registerBlockType('create-block/boilerplate', {
	edit: Edit,
	save,
});
