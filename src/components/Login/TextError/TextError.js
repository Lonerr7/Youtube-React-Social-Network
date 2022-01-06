import s from './TextError.module.css';

const TextError = (props) => {
  return (
    <div className={s.textError}>
      {props.children}
    </div>
  )
}

export default TextError
