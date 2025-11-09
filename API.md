# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Colima <a name="Colima" id="@nikovirtala/projen-colima.Colima"></a>

Colima component for projen projects.

Adds Colima support to your project with automatic installation and startup.

#### Initializers <a name="Initializers" id="@nikovirtala/projen-colima.Colima.Initializer"></a>

```typescript
import { Colima } from '@nikovirtala/projen-colima'

new Colima(scope: IConstruct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-colima.Colima.Initializer.parameter.scope">scope</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@nikovirtala/projen-colima.Colima.Initializer.parameter.scope"></a>

- *Type:* constructs.IConstruct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-colima.Colima.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@nikovirtala/projen-colima.Colima.postSynthesize">postSynthesize</a></code> | Called after synthesis. |
| <code><a href="#@nikovirtala/projen-colima.Colima.preSynthesize">preSynthesize</a></code> | Called before synthesis. |
| <code><a href="#@nikovirtala/projen-colima.Colima.synthesize">synthesize</a></code> | Synthesizes files to the project output directory. |

---

##### `toString` <a name="toString" id="@nikovirtala/projen-colima.Colima.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `postSynthesize` <a name="postSynthesize" id="@nikovirtala/projen-colima.Colima.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after synthesis.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@nikovirtala/projen-colima.Colima.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before synthesis.

##### `synthesize` <a name="synthesize" id="@nikovirtala/projen-colima.Colima.synthesize"></a>

```typescript
public synthesize(): void
```

Synthesizes files to the project output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@nikovirtala/projen-colima.Colima.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@nikovirtala/projen-colima.Colima.isComponent">isComponent</a></code> | Test whether the given construct is a component. |

---

##### `isConstruct` <a name="isConstruct" id="@nikovirtala/projen-colima.Colima.isConstruct"></a>

```typescript
import { Colima } from '@nikovirtala/projen-colima'

Colima.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-colima.Colima.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isComponent` <a name="isComponent" id="@nikovirtala/projen-colima.Colima.isComponent"></a>

```typescript
import { Colima } from '@nikovirtala/projen-colima'

Colima.isComponent(x: any)
```

Test whether the given construct is a component.

###### `x`<sup>Required</sup> <a name="x" id="@nikovirtala/projen-colima.Colima.isComponent.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@nikovirtala/projen-colima.Colima.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@nikovirtala/projen-colima.Colima.property.project">project</a></code> | <code>projen.Project</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@nikovirtala/projen-colima.Colima.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `project`<sup>Required</sup> <a name="project" id="@nikovirtala/projen-colima.Colima.property.project"></a>

```typescript
public readonly project: Project;
```

- *Type:* projen.Project

---





