import { getFirestore } from "firebase-admin/firestore";
import { initializeApp } from "firebase-admin/app";
import { Where } from "../../models";

initializeApp();

const db = getFirestore();

const getItem = async <T extends { id: string }>(
  table: string,
  id: string
): Promise<T> => {
  const doc = await db.collection(table).doc(id).get();
  const data = doc.data() as T;

  if (!data) {
    throw new Error("Item not found");
  }
  data.id = doc.id;

  return data;
};

const addItem = async <T>(table: string, item: T) => {
  const data = await db
    .collection(table)
    .add(
      item as FirebaseFirestore.WithFieldValue<FirebaseFirestore.DocumentData>
    );
  return await getItem(table, data.id);
};

const updateItem = async <T>(table: string, id: string, item: T) => {
  await db
    .collection(table)
    .doc(id)
    .set(
      item as FirebaseFirestore.WithFieldValue<FirebaseFirestore.DocumentData>,
      { merge: true }
    );

  return await getItem(table, id);
};

const getItems = async <T extends { id: string }>(
  table: string
): Promise<T[]> => {
  const docs = await db.collection(table).get();
  const data = docs.docs.map<T>((el) => {
    const item = el.data() as T;
    item.id = el.id;
    return item;
  });

  return data;
};

const getItemsWhere = async <T extends { id: string }>(
  table: string,
  where: Where
): Promise<T[]> => {
  const docs = await db
    .collection(table)
    .where(where.key, "==", where.value)
    .get();

  const data = docs.docs.map<T>((el) => {
    const item = el.data() as T;
    item.id = el.id;
    return item;
  });

  return data;
};

export { addItem, getItems, updateItem, getItem, getItemsWhere };
