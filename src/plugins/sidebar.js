import { registerPlugin } from '@wordpress/plugins';
import { PluginSidebar } from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

registerPlugin('blocks-course-plugin', {
	render: () => {
		return (
			<PluginSidebar
				name="meta-fields-sidebar"
				icon="admin-settins"
				title={__('Post Options', 'blocks-course-plugin')}
			>
				Hello World!
			</PluginSidebar>
		);
	},
});
