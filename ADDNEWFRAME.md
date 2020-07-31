# New guide will be added soon

<!-- # Add New Frame

## 1) Add new Enum

Go to [frame index file](src/models/frame/index.ts) and add new enum:

```ts
export const FRAMES = {
  SAFARI: "Safari",
  ...,
  NEW_FRAME: 'frame name'
  ...,
};
```

## 2) Create the relevant components

To make the user feel the user experience we need to create the component that he would see when using the extension.

For example see the Safari frame.
To mock Safari implementation we needed to create 2 component,
one for the top and one for the bottom.

Please add it under this path: `src/event/app/{{frameName}}`.

## 3) Create mapping components

Mapping is the way that the appender will know which component to create and what ID it should add to them.

[Click here](src/models/frame/frame-mapping.tsx) to go to the mapping file.
Please add new entry with the enum you created in step 1 as key and an array of object which has id and componentEntry field. for example:

```tsx
export const FRAMES_MAP: FramesMap = {
  ...,
  [FRAMES.MY_FRAME_ENUM]: [
    {
      id: "top_cmp",
      componentEntry: <CmpTop />,
    },
    {
      id: "bottom_cmp",
      componentEntry: <CmpBottom />,
    },
  ],
  ...
};

```

> `<CmpTop />` is a component you created at step 2


## 4) Get the components and create something with them

This part has an appender which takes the user document and the relevant frames and creates something with it.
The appender is a function that return an object.
The object keys are the enum you created (In step 1) and the value is a function which gets the frame elements array (Which you created in step 3).
The function should use the react dom to render the relevant frame element.

For example:
```tsx
export const getAppender = (document: Document) => ({
  ...,
  [FRAMES.MY_ENUM]: (frameElements: FrameElement[]) => {

    const [top, bottom] = frameElements; // This is the array you created in step 3

    const topRef = document.createElement("div");
    topRef.id = top.id;

    const bottomRef = document.createElement("div");
    bottomRef.id = bottom.id;

    document.body.insertBefore(topRef, document.body.firstChild);
    document.body.append(bottomRef);

    // after creating HTML element we need to use the react dom to render the component.
    // we created the component in step 2

    ReactDOM.render(top.componentEntry, topRef);
    ReactDOM.render(bottom.componentEntry, bottomRef);

  },
  ...,
});
```
