export default {
    dialect: 'postgresql',
    schema: './utils/schema.jsx',
    out:'./drizzle',
    dbCredentials: {
        url:  process.env.NEXT_PUBLIC_DATABASE_URL || 'postgresql://finsmartDb_owner:xTG8kRVPr3cI@ep-bitter-silence-a166stey.ap-southeast-1.aws.neon.tech/finsmartDb?sslmode=require',
        connectionStrings:  process.env.NEXT_PUBLIC_DATABASE_URL || 'postgresql://finsmartDb_owner:xTG8kRVPr3cI@ep-bitter-silence-a166stey.ap-southeast-1.aws.neon.tech/finsmartDb?sslmode=require'
    }
}

//db push error drizzle env issue