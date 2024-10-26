CREATE TABLE `admin` (
	`id` integer PRIMARY KEY NOT NULL,
	`email` text(100) NOT NULL,
	`password` text(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `organization` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(255) NOT NULL,
	`email` text(100) NOT NULL,
	`address` text(255) NOT NULL,
	`phone` text(100) NOT NULL,
	`created_at` text(255) DEFAULT '2024-10-25T09:14:37.165Z' NOT NULL,
	`updated_at` text(255) DEFAULT '2024-10-25T09:14:37.165Z' NOT NULL,
	FOREIGN KEY (`id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(255) NOT NULL,
	`email` text(100) NOT NULL,
	`password` text(100) NOT NULL,
	`phone` text(100) NOT NULL,
	`gender` text(100) NOT NULL,
	`address` text(255) NOT NULL,
	`avatar` text(255) NOT NULL,
	`dob` text(255) NOT NULL,
	`created_at` text(255) DEFAULT '2024-10-25T09:14:37.164Z' NOT NULL,
	`updated_at` text(255) DEFAULT '2024-10-25T09:14:37.165Z' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `admin_email_unique` ON `admin` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `organization_email_unique` ON `organization` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);