import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormSection from '../../ui/FormSection';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useForm } from 'react-hook-form';
import EditLayout from '../../ui/EditLayout';


type BingoFormProps = {
};

const StyledButton = styled(Button)`
    width: 12.5rem;
`;

type FormState = {
    maximum: number;
    minimum: number;
  };

const BingoForm: React.FC<BingoFormProps> = ({ }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
    control,
  } = useForm<FormState>({});

  return(
    <div>
        <Form>
            <EditLayout>
                <EditLayout.Header>
                    <h2>Choissez vos options</h2>
                </EditLayout.Header>
                <EditLayout.Content>
                    <FormSection>
                        <FormRow>
                            <Input
                                type="number"
                                id="maximum"
                                {...register('maximum', {
                                required: 'Ce champ est requis',
                                })}
                                autoComplete={'off'}
                            />
                        </FormRow>
                        <FormRow>
                            <Input
                                type="number"
                                id="minimum"
                                {...register('minimum', {
                                required: 'Ce champ est requis',
                                })}
                                autoComplete={'off'}
                            />
                        </FormRow>
                    </FormSection>
                </EditLayout.Content>
                <EditLayout.Footer>
                    <Button>
                        Ok
                    </Button>
                </EditLayout.Footer>
            </EditLayout>
            
            
        </Form>
    </div>
       
  );
};

export default BingoForm;