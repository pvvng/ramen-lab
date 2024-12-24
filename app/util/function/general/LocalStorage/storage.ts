import { ObjectId } from "mongodb";

export function updateLocalStorge(id: ObjectId, storageName: string) {
  const storageArray = getLocalStoreage(storageName);

  storageArray.push(id);

  setLocalStoreage(storageArray, storageName);
}

export function getLocalStoreage(storageName: string) {
  const isExist = localStorage.getItem(storageName);

  let storageArray: ObjectId[] = [];

  if (isExist) {
    storageArray = [...JSON.parse(isExist)];
  }

  return storageArray;
}

export function setLocalStoreage(
  storageArray: ObjectId[],
  storageName: string
) {
  const newStorage = JSON.stringify(storageArray);

  localStorage.setItem(storageName, newStorage);
}

export function checkStorageAlreadyExist(id: ObjectId, storageName: string) {
  const storageArray = getLocalStoreage(storageName);

  return storageArray.includes(id);
}

export function deleteLocalStorageById(id: ObjectId, storageName: string) {
  const storageArray = getLocalStoreage(storageName);

  const filteredArray = storageArray.filter((v) => v !== id);

  setLocalStoreage(filteredArray, storageName);

  return filteredArray;
}
