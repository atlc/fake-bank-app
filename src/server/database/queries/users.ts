import { Query } from "../connection";
import { User, BaseUser } from "../../types";

const getAll = () => Query<User[]>("SELECT * FROM Users");
const getOne = (id: number) => Query<User[]>("SELECT * FROM Users WHERE id=?", [id]);
const create = (newUser: BaseUser) => Query("INSERT INTO Users SET ?", [newUser]);
const update = (updatedUser: BaseUser, id: number) => Query("UPDATE Users SET ? WHERE id=?", [updatedUser, id]);
const destroy = (id: number) => Query("DELETE FROM Users WHERE id=?", [id]);

export default {
    getAll,
    getOne,
    create,
    update,
    destroy,
};
