import { registerPlugin } from '@wordpress/plugins';
import {
	PluginSidebar,
	PluginDocumentSettingPanel,
	PluginPostStatusInfo,
	PluginPrePublishPanel,
	PluginPostPublishPanel,
	PluginMoreMenuItem,
	PluginBlockSettingsMenuItem,
} from '@wordpress/editor';
import { __ } from '@wordpress/i18n';

registerPlugin('blocks-course-plugin', {
	render: () => {
		return (
			<>
				<PluginDocumentSettingPanel
					// name="meta-fields-panel"
					title={__('My Panel', 'blocks-course-plugin')}
					icon="admin-collapse"
				>
					<p>Document Settings Panel</p>
				</PluginDocumentSettingPanel>
				<PluginPostStatusInfo>
					<p>Post Status Info</p>
				</PluginPostStatusInfo>
				<PluginPrePublishPanel
					title={__('Pre Publish Panel', 'blocks-course-plugin')}
				>
					<p>Pre Publish Panel</p>
				</PluginPrePublishPanel>
				<PluginPostPublishPanel
					title={__('Post Publish Panel', 'blocks-course-plugin')}
				>
					<p>Post Publish Panel</p>
				</PluginPostPublishPanel>
				<PluginMoreMenuItem
					// target="blocks-course-plugin"
					icon="admin-customizer"
					onClick={() => {
						// eslint-disable-next-line
						alert('More Menu Item Clicked!');
					}}
				>
					{__('More Menu Item', 'blocks-course-plugin')}
				</PluginMoreMenuItem>
				<PluginBlockSettingsMenuItem
					icon="admin-home"
					label={__('Custom Menu Item', 'blocks-course-plugin')}
					onClick={() => {
						// eslint-disable-next-line
						alert('Custom Menu Item Clicked!');
					}}
					allowedBlocks={['core/paragraph']}
				/>
				<PluginSidebar
					name="meta-fields-sidebar"
					icon="admin-settins"
					title={__('Post Options', 'blocks-course-plugin')}
				>
					Hello World!
				</PluginSidebar>
			</>
		);
	},
});
