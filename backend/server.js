const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js"); // Import from config

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express?.json());

// Connect to Database
connectDB(); // Call the function

// Routes
app.use("/api/counts", require("./routes/countRoutes"));
app.use("/api/auth", require("./routes/authRoutes"));
app.get("/", (req, res) => {
  res.send("Shooting Profiling Backend Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// private void SendBtn_Click(object sender, EventArgs e)
// {
//     // Removed the local "int Balance" here so it uses the one from the top
//     if (RecAccTb.Text == "" || AmountTb.Text == "")
//     {
//         MessageBox.Show("Missing Information");
//     }
//     else if (Convert.ToInt32(AmountTb.Text) > Balance)
//     {
//         MessageBox.Show("Insufficient Balance");
//     }
//     else
//     {
//         try
//         {
//             connection.Open();
//             SqlDataAdapter sda = new SqlDataAdapter("select count(*) from AccountTbl where AccNum='" + RecAccTb.Text + "'", connection);
//             DataTable dt = new DataTable();
//             sda.Fill(dt);

//             if (dt.Rows[0][0].ToString() == "1")
//             {
//                 int trAmount = Convert.ToInt32(AmountTb.Text);
//                 SqlCommand cmd = new SqlCommand("update AccountTbl set Balance=Balance-" + trAmount + " where AccNum='" + MyAcc + "'", connection);
//                 cmd.ExecuteNonQuery();

//                 SqlCommand cmd2 = new SqlCommand("update AccountTbl set Balance=Balance+" + trAmount + " where AccNum='" + RecAccTb.Text + "'", connection);
//                 cmd2.ExecuteNonQuery();

//                 connection.Close(); // Close before calling AddTransaction to avoid "Connection already open" error

//                 AddTransaction(trAmount);

//                 MessageBox.Show("Success! Money Transferred.");

//                 HOME home = new HOME();
//                 home.Show();
//                 this.Hide();
//             }
//             else
//             {
//                 MessageBox.Show("Receiver Account Does Not Exist.");
//                 connection.Close();
//             }
//         }
//         catch (Exception Ex)
//         {
//             MessageBox.Show(Ex.Message);
//             connection.Close();
//         }
//     }
// }
