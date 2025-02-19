import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const MetaFieldsInputs = () => {
	const subtitleValue = useSelect((select) => {
		return select('core/editor').getEditedPostAttribute('meta')
			._blocks_course_post_subtitle;
	});
	const { editPost } = useDispatch('core/editor');
	return (
		<PanelBody title={__('Sub-title options', 'blocks-course-plugin')}>
			<TextControl
				__nextHasNoMarginBottom
				label={__('Sub-title', 'blocks-course-plugin')}
				value={subtitleValue}
				onChange={(value) => {
					editPost({ meta: { _blocks_course_post_subtitle: value } });
				}}
			/>
		</PanelBody>
	);
};

registerPlugin('blocks-course-plugin', {
	render: () => {
		return (
			<PluginSidebar
				name="meta-fields-sidebar"
				icon="admin-settins"
				title={__('Post Options', 'blocks-course-plugin')}
			>
				<MetaFieldsInputs />
			</PluginSidebar>
		);
	},
});
