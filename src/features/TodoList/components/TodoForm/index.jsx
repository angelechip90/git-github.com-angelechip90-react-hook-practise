import { ErrorMessage } from '@hookform/error-message';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/inputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  // const { onSubmit } = props;
  // const [value, setValue] = useState('');

  // function handleValueChange(e) {
  //     console.log(e.target.value);
  //     setValue(e.target.value);
  // }

  // function handleSubmit(e) {
  //     //chặn reload khi enter
  //     e.preventDefault();
  //     if (!onSubmit) return;

  //     const formValues = {
  //         title: value,

  //     }
  //     onSubmit(formValues);

  //     //reset form
  //     setValue('');
  // }

  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (values) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(values);
    form.reset();
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField name="title" label="Todo" form={form} />
      </form>
    </div>
    // <form onSubmit={handleSubmit}>
    //     <label style={{ marginRight: '10px' }}>Input new task:</label> <input type="text" value={value} onChange={handleValueChange} placeholder='Input new task and enter'></input>
    // </form>
  );
}

export default TodoForm;
