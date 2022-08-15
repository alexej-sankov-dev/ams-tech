import React, { useCallback } from 'react'
import { useForm, Controller } from "react-hook-form";
import { TextField } from '@mui/material';
import { Button, Paper, List, ListItem, ListItemIcon, ListItemText, FormControlLabel, Checkbox, RadioGroup, Radio, Select, MenuItem, ToggleButtonGroup, ToggleButton} from '@mui/material';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Dropzone from "react-dropzone";
import CloudUpload from '@mui/icons-material/CloudUpload';
import InsertDriveFile from '@mui/icons-material/InsertDriveFile';


import './ContactForm.scss'

const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message
              }
            }),
            {}
          )
        };
      }
    },
    [validationSchema]
);


const schema = yup.object().shape({
    name: yup
        .string()
        .matches(/^([^0-9]*)$/, "Name darf keine Zahlen enthalten")
        .required("Name ist ein Pflichtfeld"),
    company: yup
        .string()
        .matches(/^([^0-9]*)$/, "Firma darf keine Zahlen enthalten"),
    email: yup
        .string()
        .email("E-Mail muss ein valides Format haben")
        .required("E-Mail ist ein Pflichtfeld"),
});

const normalizePhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if(!phoneNumber){
      return value
    }
  
    return (
      phoneNumber.formatInternational() 
    );
};



const ContactForm = () => {
    const resolver = useYupValidationResolver(schema)
    const { control, register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver,
    });

    const onSubmit = (data) => {
        console.log(data)
        reset()
        setSelected1(false)
        setSelected2(false)
        setSelected3(false)
        setSelected4(false)
        setSelected5(false)
        setSelected6(false)
        setSelected7(false)
        setSelected8(false)
        setSent(true)
    };

    const [selected1, setSelected1] = React.useState(false);
    const [selected2, setSelected2] = React.useState(false);
    const [selected3, setSelected3] = React.useState(false);
    const [selected4, setSelected4] = React.useState(false);
    const [selected5, setSelected5] = React.useState(false);
    const [selected6, setSelected6] = React.useState(false);
    const [selected7, setSelected7] = React.useState(false);
    const [selected8, setSelected8] = React.useState(false);

    const [sent, setSent] = React.useState(false);


    
    return (
        <form noValidate onSubmit={handleSubmit(onSubmit)} className='contact-form'>
            <div className='input-name input-contact-text'>
              <label className='contact-form-label'>Name*</label>
              <TextField className='contact-form-input'
                {...register('name')}
                error={!!errors.name}
                helperText={errors?.name?.message}
                name='name'
                type='text'
                fullWidth
                required
                id='outlined-required'
                placeholder="Ihr Name"
              />
            </div>
            <div className='input-company input-contact-text'>
              <label className='contact-form-label'>Firma</label>
              <TextField className='contact-form-input '
                  {...register('company')}
                  error={!!errors.company}
                  helperText={errors?.company?.message}
                  name='company'
                  type='text'
                  fullWidth
                  id='outlined'
                  placeholder='Ihre Firma'
              />
            </div>
            <div className='input-email input-contact-text'>
              <label className='contact-form-label'>E-Mail*</label>
              <TextField className='contact-form-input '
                  {...register('email')}
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  name='email'
                  type='text'
                  fullWidth
                  required
                  id='outlined-required'
                  placeholder='Ihre E-Mail'
              />
            </div>
            <div className='input-phone input-contact-text'>
              <label className='contact-form-label'>Telefonnummer</label>
              <TextField className='contact-form-input '
                  {...register('phoneNumber')}
                  error={!!errors.phone}
                  helperText={errors?.phone?.message}
                  name='phoneNumber'
                  type='tel'
                  fullWidth
                  id='outlined'
                  placeholder='Ihre Tel.-Nr.'
                  onChange={(event) => {
                      event.target.value = normalizePhoneNumber(event.target.value);
                  }}
              />
            </div>            
            <div className='input-services'>
              <label className='contact-form-label'>Services</label>
              <div className='input-servcies-list'>
                <Controller
                    name='webdev'
                    control={control}
                    defaultValue={false}
                    render={({
                      field: {onChange, onBlur, value, name, ref}
                    }) => (
                        <span className='contact-form-service'>
                          <ToggleButton 
                            value={selected1}
                            selected={selected1}
                            onChange={() => {
                              setSelected1(!selected1)
                              onChange(!selected1)
                            }}
                          >
                            Web Development
                          </ToggleButton>
                        </span>
                    )}
                />
                <Controller
                    name='mobiledev'
                    control={control}
                    defaultValue={false}
                    render={({
                      field: {onChange, onBlur, value, name, ref}
                    }) => (
                        <span className='contact-form-service'>
                          <ToggleButton 
                            value={selected2}
                            selected={selected2}
                            onChange={() => {
                              setSelected2(!selected2)
                              onChange(!selected2)
                            }}
                          >
                            Mobile Development
                          </ToggleButton>
                        </span>
                    )}
                />
                <Controller
                    name='design'
                    control={control}
                    defaultValue={false}
                    render={({
                      field: {onChange, onBlur, value, name, ref}
                    }) => (
                        <span className='contact-form-service'>                  
                          <ToggleButton 
                            value={selected3}
                            selected={selected3}
                            onChange={() => {
                              setSelected3(!selected3)
                              onChange(!selected3)
                            }}
                          >
                            UI/UX Design
                          </ToggleButton>
                        </span>
                    )}
                />
                <Controller
                    name='logo'
                    control={control}
                    defaultValue={false}
                    render={({
                      field: {onChange, onBlur, value, name, ref}
                    }) => (
                        <span className='contact-form-service'>
                          <ToggleButton 
                            value={selected4}
                            selected={selected4}
                            onChange={() => {
                              setSelected4(!selected4)
                              onChange(!selected4)
                            }}
                          >
                            Logo/Branding
                          </ToggleButton>
                        </span>
                    )}
                />
                <Controller
                    name='ecom'
                    control={control}
                    defaultValue={false}
                    render={({
                      field: {onChange, onBlur, value, name, ref}
                    }) => (
                        <span className='contact-form-service'>
                          <ToggleButton 
                            value={selected5}
                            selected={selected5}
                            onChange={() => {
                              setSelected5(!selected5)
                              onChange(!selected5)
                            }}
                          >
                            E-Commerce
                          </ToggleButton>
                        </span>
                    )}
                />
                <Controller
                    name='marketing'
                    control={control}
                    defaultValue={false}
                    render={({
                      field: {onChange, onBlur, value, name, ref}
                    }) => (
                        <span className='contact-form-service'>
                          <ToggleButton 
                            value={selected6}
                            selected={selected6}
                            onChange={() => {
                              setSelected6(!selected6)
                              onChange(!selected6)
                            }}
                          >
                            Marketing
                          </ToggleButton>
                        </span>
                    )}
                />
                <Controller
                    name='blockchain'
                    control={control}
                    defaultValue={false}
                    render={({
                      field: {onChange, onBlur, value, name, ref}
                    }) => (
                        <span className='contact-form-service'>                  
                          <ToggleButton 
                            value={selected7}
                            selected={selected7}
                            onChange={() => {
                              setSelected7(!selected7)
                              onChange(!selected7)
                            }}
                          >
                            NFT & Blockchain
                          </ToggleButton>
                        </span>
                    )}
                />
                <Controller
                    name='other'
                    control={control}
                    defaultValue={false}
                    render={({
                      field: {onChange, onBlur, value, name, ref}
                    }) => (
                        <span className='contact-form-service'>                  
                          <ToggleButton 
                            value={selected8}
                            selected={selected8}
                            onChange={() => {
                              setSelected8(!selected8)
                              onChange(!selected8)
                            }}
                          >
                            Andere
                          </ToggleButton>
                        </span>
                    )}
                />
              </div>
            </div>
            <div className='input-budget'>
              <label className='contact-form-label'>Projekt Budget</label>
              <div className='vis-btn-b'>
                <Controller
                  name='budget'
                  control={control}
                  defaultValue=''
                  render={({
                    field: {onChange, onBlur, value, name, ref}
                  }) => (
                  <ToggleButtonGroup className='input-budget-inner'
                      value={value}
                      exclusive
                      fullWidth
                      onChange={onChange}
                    >
                      <ToggleButton value='100 € - 500 €'>100 € - 500 €</ToggleButton>

                      <ToggleButton value='500 € - 1K €'>500 € - 1K €</ToggleButton>

                      <ToggleButton value='1K € - 5K €'>1K € - 5K €</ToggleButton>

                      <ToggleButton value='5K+ €'>5K+ €</ToggleButton>
                    </ToggleButtonGroup>
                  )}
                />
              </div>
              <div className='vis-btn-s'>
                <Controller
                  name='budget'
                  control={control}
                  defaultValue=''
                  render={({
                    field: {onChange, onBlur, value, name, ref}
                  }) => (
                    <ToggleButtonGroup className='input-budget-inner'
                      value={value}
                      exclusive
                      fullWidth
                      onChange={onChange}
                    >
                      <ToggleButton value='100 € - 500 €'>100€ - 500€</ToggleButton>                   
                      <ToggleButton value='500 € - 1K €'>500€ - 1K€</ToggleButton>                   
                      <ToggleButton value='1K € - 5K €'>1K€ - 5K€</ToggleButton>
                      <ToggleButton value='5K+ €'>5K+ €</ToggleButton>
                    </ToggleButtonGroup>
                  )}
                />
              </div>
            </div>
            <div className='input-time'>
              <label className='contact-form-label'>Projekt Dauer</label>
              <div className='vis-btn-b'>
                <Controller
                  name='time'
                  control={control}
                  defaultValue=''
                  render={({
                    field: {onChange, onBlur, value, name, ref}
                  }) => (
                    <ToggleButtonGroup className='input-time-inner'
                      value={value}
                      exclusive
                      fullWidth
                      onChange={onChange}
                    >
                      <ToggleButton value='1 Woche - 2 Wochen'>1 - 2 Wochen</ToggleButton>
                      <ToggleButton value='2 Wochen - 4 Wochen'>2 - 4 Wochen</ToggleButton>
                      <ToggleButton value='4 Wochen - 8 Wochen'>4 - 8 Wochen</ToggleButton>
                      <ToggleButton value='2+ Monate'>2+ Monate</ToggleButton>
                    </ToggleButtonGroup>
                  )}
                />
              </div>
              <div className='vis-btn-s'>
                <Controller
                  name='time'
                  control={control}
                  defaultValue=''
                  render={({
                    field: {onChange, onBlur, value, name, ref}
                  }) => (
                    <ToggleButtonGroup className='input-time-inner'
                      value={value}
                      exclusive
                      fullWidth
                      onChange={onChange}
                    >
                      <ToggleButton value='1 Woche - 2 Wochen'>1-2 Wochen</ToggleButton>
                      <ToggleButton value='2 Wochen - 4 Wochen'>2-4 Wochen</ToggleButton>
                      <ToggleButton value='4 Wochen - 8 Wochen'>4-8 Wochen</ToggleButton>
                      <ToggleButton value='2+ Monate'>2+ Monate</ToggleButton>
                    </ToggleButtonGroup>
                  )}
                />
              </div>
            </div>
            <div className='input-msg'>
              <label className='contact-form-label'>Worum geht es in eurem Projekt?</label>
              <TextField className='input-msg-inner'
                {...register('msg')}
                id="outlined-multiline-static"
                multiline
                rows={7}
                name='msg'
                fullWidth
                placeholder='Ihre Nachricht'
                />
            </div>
            <Controller
                name='files'
                control={control}
                defaultValue={[]}
                render={({
                  field: {onChange, onBlur, value, name, ref}
                }) => (
                    <div className='input-files'>
                      <label className='contact-form-label'>Möchten Sie etwas mitsenden?</label>
                      <Dropzone  onDrop={onChange} >
                        {({getRootProps, getInputProps}) => (
                          <Paper
                              variant="outlined"
                              
                              className='input-files-box'
                              {...getRootProps()}
                          >
                            <CloudUpload className='input-files-cloud' />
                            <input {...getInputProps()} name='files' onBlur={onBlur} />
                            <p>Klicken Sie oder ziehen Sie Dateien in diesen Bereich zum Hochladen.</p>
                          </Paper>
                        )}
                      </Dropzone>
                      <List className='input-files-list'>
                        {value.map(f => (
                          <ListItem key={f.path}>
                            <ListItemIcon>
                              <InsertDriveFile />
                            </ListItemIcon>
                            <ListItemText className='input-files-list-item' primary={f.path} secondary={f.size} />
                          </ListItem>
                        ))}
                      </List>
                    </div>
                  )}
            />
            <button
                type='submit'
                className='contact-form-submit'
            ><span>Absenden</span>
            </button>
            <div className={`${sent ? 'success-text-vis' : 'success-text'}`}>
              <div className='success-text-big'>
                Erfolgreich gesendet.
              </div>
              <div className='success-text-small'>
                Vielen Dank für Ihre Anfrage. Wir melden uns zeitnah bei Ihnen zurück.
              </div>
            </div>
        </form>
    )
}

export default ContactForm