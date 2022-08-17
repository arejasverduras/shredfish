import React from "react";
import { useSelector } from "react-redux";
import { selectTidesStatusSG, selectTidesDataSG } from "../../../containers/TidesResult/TidesResultSlice";
import { getHour } from "../../../features/features";