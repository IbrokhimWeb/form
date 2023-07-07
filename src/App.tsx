import { Box, Button, Card, TextField, TextareaAutosize } from "@mui/material";
import React, { FormEvent, useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, phone, message } = data;
    let post = `--- ${"BOG'CHA"} --- %0A%0A`;
    post += `👨‍💼 Mijoz: <b> ${name}</b> %0A`;
    post += `📞 Raqam: <b> ${phone}</b> %0A`;
    post += `💭 Xabar: <b> ${message}</b> %0A`;

    const api = new XMLHttpRequest();

    api.open(
      "GET",
      `https://api.telegram.org/bot${import.meta.env.VITE_TOKEN}/sendMessage?chat_id=${import.meta.env.VITE_CHAT_ID || "-1001699907395"}&text=${post}&parse_mode=html`
      , true
    );
    api.send();
    setData({
      name: "",
      phone: "",
      message: "",
    });
    alert("Siz Kiritgan Malumotlar Adminga Yuborildi");
  };

  return (
    <>
      <main className="w-full mt-10 flex justify-center gap-10 text-black max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:mt-0">
        <Card className="w-[50%] h-auto box bg-[#3a3a3a11] rounded-2xl overflow-hidden max-[1000px]:w-full max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center">
          <Box className="w-full h-full backdrop-filter backdrop-blur p-10 text-black max-[400px]:p-7">
            <h1 className="text-[1.5em] text-center mb-7 max-[400px]:text-[1.2em]">
              Tez orada siz bilan bog'lanamiz!
            </h1>
            <form
              onSubmit={handleSubmit}
              className="w-full h-full flex flex-col gap-5">
              <div className="w-full flex items-center gap-5 max-[1200px]:flex-col max-[1000px]:flex-row max-[800px]:flex-col">
                <TextField
                  required
                  fullWidth
                  type="text"
                  label="Ismingiz"
                  value={data?.name}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  sx={{
                    input: { color: "black" },
                    "&:hover": {
                      borderColor: "red",
                    },
                    "& label": {
                      color: "black",
                    },
                    "& label.Mui-focused": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
                <TextField
                  required
                  fullWidth
                  type="tel"
                  label="Telefon raqamingiz"
                  value={data?.phone}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  sx={{
                    input: { color: "black" },
                    "&:hover": {
                      borderColor: "red",
                    },
                    "& label": {
                      color: "black",
                    },
                    "& label.Mui-focused": {
                      color: "black",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "black",
                      },
                      "&:hover fieldset": {
                        borderColor: "black",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "black",
                      },
                    },
                  }}
                />
              </div>
              <TextareaAutosize
                required
                minRows={3}
                value={data?.message}
                placeholder="Xabaringiz*"
                className="w-full p-5 rounded-md bg-transparent border-2 border-black"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, message: e.target.value }))
                }
              />
              <Button
                type="submit"
                variant="contained"
                className="bg-green-600">
                Yuborish
              </Button>
            </form>
          </Box>
        </Card>
      </main>
      <footer className="relative w-full h-[30vh] flex flex-col items-center justify-center gap-3 py-10 text-black">
        <h1 className="text-[1.1em] font-bold">
          Ish vaqti:{" "}
          <span className="text-[.9em] font-light">
            Dush - Shan, 09:00 - 18:30
          </span>
        </h1>
        <h1 className="text-[1.1em] font-bold">
          Bizning raqam:{" "}
          <span className="text-[.9em] font-light">
            {import.meta.env.VITE_PHONE}
          </span>
        </h1>
        <h1 className="text-[1.1em] font-bold text-center">
          Manzil: <br />
          <a
            href="https://maps.windows.com/?form=WNAMSH&collection=point.41.287201_69.249941_Point"
            className="text-[.9em] font-light text-blue-500">
            Univer kids, 100033, O'zbekiston, Toshkent shaxar, Yunusobod 5
            mavzesi
          </a>
        </h1>
      </footer>
    </>
  );
};

export default App;
