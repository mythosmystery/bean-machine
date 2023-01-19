import PocketBase, { Admin, Record, type RecordAuthResponse } from 'pocketbase';
import type { User } from '../models/user';
import { PB_URL } from '../static/constants';

export class State {
    pb: PocketBase
    auth: Record | Admin | null

    constructor() {
        this.pb = new PocketBase(PB_URL);
        this.auth = this.pb.authStore.model;
    }
}