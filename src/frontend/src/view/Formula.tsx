import Heading from '@atlaskit/heading';
import { Box } from '@atlaskit/primitives';
import { token } from '@atlaskit/tokens';

interface Props {
  label: string;
  value: string;
}

export default function Formula(props: Props) {
  return (
    <Box
      backgroundColor="color.background.neutral.hovered"
      padding="space.100"
      style={{
        alignItems: 'center',
        borderRadius: token('radius.large', '0.5rem'),
        borderWidth: token('border.width', '0.0625rem'),
        display: 'flex',
        height: '12rem',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div>
        <Heading as="h1" size="xxlarge">
          <span style={{ color: token('color.text.accent.green', '#216E4E') }}>
            {props.value}
          </span>
        </Heading>

        <br />

        <Heading as="h2" size="medium">
          {props.label}
        </Heading>
      </div>
    </Box>
  );
}
