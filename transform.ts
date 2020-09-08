import { Transform, FileInfo, API } from "jscodeshift";

const transform: Transform = ({ source }: FileInfo, { jscodeshift }: API) => {
  const j = jscodeshift;
  return j(source)
    .find(j.CallExpression, {
      callee: {
        object: { name: "foo" },
        property: { name: "bar" },
      },
    })
    .replaceWith((path) => {
      return j.callExpression(
        j.memberExpression(j.identifier("foo"), j.identifier("baz")),
        path.value.arguments
      );
    })
    .toSource();
};

export default transform;
