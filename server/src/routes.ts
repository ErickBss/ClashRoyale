import { Router } from "express";
const cors = require("cors");
const axios = require("axios");

const router = Router();

router.use(cors());

router.get("/api", async (req, res) => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImRkYWYyNGIxLTI1Y2UtNGUwYy04YThhLTkyZDIzODg1N2Y2NCIsImlhdCI6MTY0NDI0MjIxMSwic3ViIjoiZGV2ZWxvcGVyLzVmNDVmNjJkLWZlYmItNjM0Mi0yZjk5LTQ0MzgxNjI0NDIzMyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzkuMTA5LjEyMy4yMTUiXSwidHlwZSI6ImNsaWVudCJ9XX0.Dd4eYDAtJhrlOvOhjvdq_5ytBZgpZDwz-WDKt28qJU9nZPoE6alfA2-k49a0ZU2X8oHTAXsRzybJ-HAjHLghEQ";

  const settings = {
    method: "GET",
    url: "https://api.clashroyale.com/v1/cards",
    headers: {
      authorization: "Bearer " + token,
    },
  };
  try {
    interface response {
      data: {
        items: Array<data>;
      };
    }

    interface data {
      name: string;
      maxLevel: string;
      iconUrls: {
        medium: string;
      };
    }

    await axios.request(settings).then((response: response) => {
      let data = response.data.items;
      let array: Array<object> = [];
      data.forEach((element) => {
        array = [
          ...array,
          {
            name: element.name,
            Level: element.maxLevel,
            image: element.iconUrls.medium,
          },
        ];
      });

      res.json(array);
    });
  } catch (error) {
    console.error(error);
  }
});

export { router };
