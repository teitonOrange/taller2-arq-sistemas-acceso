BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[User] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [firstLastName] NVARCHAR(1000) NOT NULL,
    [secondLastName] NVARCHAR(1000) NOT NULL,
    [rut] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [hashedPassword] NVARCHAR(1000) NOT NULL,
    [isEnable] BIT NOT NULL CONSTRAINT [User_isEnable_df] DEFAULT 1,
    [careerId] INT,
    [roleId] INT,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [User_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [User_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Role] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Role_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Career] (
    [id] INT NOT NULL IDENTITY(1,1),
    [name] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [Career_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_careerId_fkey] FOREIGN KEY ([careerId]) REFERENCES [dbo].[Career]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[User] ADD CONSTRAINT [User_roleId_fkey] FOREIGN KEY ([roleId]) REFERENCES [dbo].[Role]([id]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
