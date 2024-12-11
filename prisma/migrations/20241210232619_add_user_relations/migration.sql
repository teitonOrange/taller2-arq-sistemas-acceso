/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[User] ADD [token] NVARCHAR(1000);

-- CreateTable
CREATE TABLE [dbo].[BlacklistToken] (
    [id] INT NOT NULL IDENTITY(1,1),
    [token] NVARCHAR(1000) NOT NULL,
    [expiration] DATETIME2 NOT NULL,
    CONSTRAINT [BlacklistToken_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [BlacklistToken_token_key] UNIQUE NONCLUSTERED ([token])
);

-- CreateIndex
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_email_key] UNIQUE NONCLUSTERED ([email]);

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
