import PocketBase, { Admin, Record, type RecordAuthResponse } from 'pocketbase';
import type { User } from '../models/user';

export class State {
    pb: PocketBase
    auth: Record | Admin | null

    constructor() {
        this.pb = new PocketBase("https://pb.mythosmystery.gq");
        this.auth = this.pb.authStore.model;
    }
}