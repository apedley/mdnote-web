
export function testEmptyAction(actionType: string, creator: any) {
  const action = new creator();
  expect({...action}).toEqual({
    type: actionType
  });
}

export function testPayloadAction(actionType: string, creator: any, payload: any) {
  const action = new creator(payload);
  expect({...action}).toEqual({
    type: actionType,
    payload: payload
  });
}
