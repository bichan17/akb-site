/*
Conditionally wrap components with a supplied element

example:

<ConditionalWrapper condition={wrapDiv == true} wrapper={children => <div className={styles.excerptAndThumbWrapper}>{children}</div>}>
  <div>Wrap me!</div>
</ConditionalWrapper>

*/

const ConditionalWrapper = ({ condition, wrapper, elseWrapper, children }) => {
  //if elseWrapper prop is added, wrap with that wrapper on the else condition
  //otherwise dont wrap with anything

  if (elseWrapper) {
    return condition ? wrapper(children) : elseWrapper(children);
  } else {
    return condition ? wrapper(children) : children;
  }
};

export default ConditionalWrapper;
