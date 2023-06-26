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
    let post = `--- SARBON --- %0A%0A`;
    post += `👨‍💼 Mijoz: <b> ${name}</b> %0A`;
    post += `📞 Raqam: <b> ${phone}</b> %0A`;
    post += `💭 Xabar: <b> ${message}</b> %0A`;

    const api = new XMLHttpRequest();

    api.open(
      "GET",
      `https://api.telegram.org/bot${
        import.meta.env.VITE_TOKEN
      }/sendMessage?chat_id=${
        import.meta.env.VITE_CHAT_ID
      }&text=${post}&parse_mode=html`,
      true
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
      <main className="w-full mt-10 flex justify-center gap-10 text-white max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:mt-0">
        <Card className="w-[50%] h-auto box bg-[#ffffff09] rounded-2xl overflow-hidden max-[1000px]:w-full max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center">
          <Box className="w-full h-full backdrop-filter backdrop-blur p-10 text-white max-[400px]:p-7">
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
                    input: { color: "white" },
                    "&:hover": {
                      borderColor: "red",
                    },
                    "& label": {
                      color: "white",
                    },
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
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
                    input: { color: "white" },
                    "&:hover": {
                      borderColor: "red",
                    },
                    "& label": {
                      color: "white",
                    },
                    "& label.Mui-focused": {
                      color: "white",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
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
                className="w-full p-5 rounded-md bg-transparent border-2"
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
      <footer className="relative w-full h-[50vh] flex flex-col items-center justify-center gap-3 py-10 text-white">
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
            className="text-[.9em] font-light">
            Univer kids, 100033, O'zbekiston, Toshkent shaxar, Yunusobod 5
            mavzesi
          </a>
        </h1>
      </footer>
    </>
  );
};

export default App;
