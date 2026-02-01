CREATE TABLE `waitlist_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`company_name` varchar(255),
	`website` varchar(512),
	`email` varchar(320) NOT NULL,
	`phone` varchar(50) NOT NULL,
	`sms_consent` boolean NOT NULL DEFAULT false,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `waitlist_submissions_id` PRIMARY KEY(`id`)
);
