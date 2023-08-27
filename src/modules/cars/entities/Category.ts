import { v4 as uuidV4 } from 'uuid';
import {Column, Entity, PrimaryColumn} from 'typeorm';

@Entity("categories")
class Category {
	@PrimaryColumn()
	id?: string;

	@Column()
	name: string;

	@Column()
	description: string;

	@CreateDateColumn({
		nullable: false,
		name: "created_at"
	})
	created_at: Date;

	constructor() {
		if (!this.id) {
			this.id = uuidV4();
		}
	}
}

export { Category };
