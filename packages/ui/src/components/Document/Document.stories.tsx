import React from "react";
import Component from "./index";
import { Story } from "@storybook/react";

export default {
	title: "Document",
	component: Component,
};

const Template: Story<typeof Component> = (args: any) => (
	<div style={{ width: 600 }}>
		<Component {...args} />
	</div>
);

export const Empty = Template.bind({});
Empty.args = {
	title: "Loren Ipsum",
	children: `
	Suspendisse aliquet tempus diam quis interdum.

 Vivamus viverra maximus diam ut faucibus. Nunc in quam eu libero tempus porta. Donec tincidunt ex a felis elementum, a elementum nibh blandit. Maecenas blandit bibendum ultrices. Donec dapibus vitae ipsum quis blandit. Vivamus aliquam ullamcorper eros dignissim pulvinar. Nunc ac ultrices leo. Nam congue, metus sit amet pretium tempor, magna ligula convallis nisl, at gravida urna justo in neque. Sed dolor metus, hendrerit in accumsan sit amet, blandit cursus lectus. Cras iaculis urna nibh, sit amet pharetra felis gravida ullamcorper. Morbi rhoncus dui at risus sollicitudin, vitae efficitur tellus faucibus. Pellentesque pellentesque laoreet lacinia. Donec elementum et elit sed ullamcorper. Sed hendrerit nulla eu risus dapibus auctor. Donec consequat dolor mattis justo sagittis commodo.

Vivamus nec ipsum metus.

Nunc vitae odio accumsan, auctor dolor et, interdum ipsum.  Donec tincidunt eu neque ac sagittis. Cras dapibus iaculis nulla sed bibendum. In in euismod nulla. Pellentesque fermentum imperdiet urna, et molestie risus tincidunt eu. Proin ornare scelerisque ipsum in rhoncus. Pellentesque fringilla, ligula eu pharetra convallis, ex metus malesuada ex, quis sagittis ante dolor ac tortor. Nulla nec sem eu tellus convallis tempor. Curabitur id massa gravida eros convallis ultrices tempor et orci. Mauris lobortis tempus lectus, sed ultricies mauris ornare eu. Phasellus sit amet auctor lorem. Nunc leo purus, dignissim eu urna porta, ullamcorper imperdiet dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec aliquam molestie eros faucibus hendrerit. Curabitur volutpat imperdiet tortor nec scelerisque.

Vivamus fermentum arcu et justo condimentum rhoncus. Phasellus convallis vulputate massa, quis semper ante venenatis at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent et convallis tortor. Nulla iaculis sollicitudin enim quis convallis. In sem libero, accumsan a mauris id, tempor semper enim. Sed quis enim a risus posuere tincidunt vel eu neque. Phasellus quis tortor tellus. Nam blandit lorem a iaculis feugiat. Integer varius elit ex, sed egestas tellus ornare tempus. Vestibulum vestibulum nunc eu lacus suscipit placerat.
	`,
};
