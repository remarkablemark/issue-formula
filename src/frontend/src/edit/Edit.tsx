import Button, { ButtonGroup } from '@atlaskit/button';
import Form, { Field } from '@atlaskit/form';
import TextField from '@atlaskit/textfield';

import type { FormValues, View } from '../types';

interface Props {
  formValues: FormValues;
  view: View;
}

export default function Edit(props: Props) {
  return (
    <Form<FormValues> onSubmit={(formValues) => props.view.submit(formValues)}>
      {({ formProps, submitting }) => (
        <form {...formProps}>
          <Field
            name="label"
            label="Label"
            defaultValue={props.formValues.label}
          >
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>

          <Field name="jql" label="JQL" defaultValue={props.formValues.jql}>
            {({ fieldProps }) => <TextField {...fieldProps} />}
          </Field>

          <br />

          <ButtonGroup>
            <Button appearance="primary" type="submit" isDisabled={submitting}>
              Save
            </Button>

            <Button onClick={() => props.view.submit(props.formValues)}>
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Form>
  );
}