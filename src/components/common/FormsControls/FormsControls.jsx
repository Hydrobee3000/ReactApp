import s from './FormsControls.module.css'

export const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
      <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <Element {...input} {...props} />
        {hasError && <span> {meta.error} </span>}
      </div>
    )
  }

//   export const Textarea = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return <Element {...props}><textarea {...input} {...restProps} /></Element>
// }

// export const Input = (props) => {
//     const {input, meta, child, ...restProps} = props;
//     return <Element {...props}><input {...input} {...restProps} /></Element>
// }
