import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BiIcons from "react-icons/bi";

import { Certificate } from "@styled-icons/fluentui-system-regular";
import styled from "styled-components";
import { Key } from "@styled-icons/entypo";
import { DocumentCheckmark } from "@styled-icons/fluentui-system-filled";
import { MdAir } from "react-icons/md";
import { CalendarCancel } from "@styled-icons/fluentui-system-filled";
import { CardText } from "@styled-icons/bootstrap";
import { Verified } from "@styled-icons/material";
import { Report } from "@styled-icons/boxicons-solid";
import { ListCheck } from "@styled-icons/boxicons-regular";
import { ClipboardCheckmark } from "@styled-icons/fluentui-system-filled";
import { UserCheck } from "@styled-icons/boxicons-regular";
import { Update } from "@styled-icons/material";
import { RupeeSign } from "@styled-icons/fa-solid";
import { Payment } from "@styled-icons/fluentui-system-filled";
const CertificateIcon = styled(Certificate)``;

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  /* {
    "this will be used in the Civil and traffic police departments"
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNavIsOpen: false,
    subNav: [
      {
        title: "Users",
        path: "/reports/users",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Revenue",
        path: "/reports/revenue",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  */
  {
    title: "Certificate management",
    path: "/applicationrequest",
    icon: <CertificateIcon size="40" />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNavIsOpen: false,

    subNav: [
      {
        title: "Transfer of ownsership",
        path: "/applicationrequest/transferownership",
        icon: <BiIcons.BiTransfer />,
      },
      {
        title: "License renewal",
        path: "/applicationrequest/licenserenewal",
        icon: <Key size="15" />,
      },
      {
        title: "Fitness",
        path: "/applicationrequest/fitness",
        icon: <IoIcons.IoIosFitness />,
      },
      {
        title: "Permit",
        path: "/applicationrequest/permit",
        icon: <DocumentCheckmark size="15" />,
      },
      {
        title: "Pollution",
        path: "/applicationrequest/pollution",
        icon: <MdAir />,
      },
    ],
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <Payment size="20" />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNavIsOpen: false,

    subNav: [
      {
        title: "Fines",
        path: "/Payment/Fines",
        icon: <RupeeSign size="20" />,
      },
    ],
  },

  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  /*{
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  */
  {
    title: "License Management",
    path: "/Licensemanagment",
    icon: <CardText size="20" />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNavIsOpen: false,
    subNav: [
      {
        title: "License suspend or revoke",
        path: "/License management/licenserevokesuspend",
        icon: <CalendarCancel size="20" />,
      },
    ],
  },
  {
    title: "Vehicle Verification",
    path: "/vehicle verification",
    icon: <Verified size="20" />,
    cName: "nav-text",
  },
  {
    title: "Vehicle crimes",
    path: "/vehicle crimes",
    icon: <Report size="20" />,
    cName: "nav-text",
  },
  {
    title: "Update fines and penalities",
    path: "/updatefinesandpenalities",
    icon: <Update size="30" />,
    cName: "nav-text",
  },
  {
    title: "Verification",
    path: "/Verification",
    icon: <ClipboardCheckmark size="20" />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNavIsOpen: false,
    subNav: [
      {
        title: "User Verification",
        path: "/Verification/Userverification",
        icon: <UserCheck size="20" />,
      },
      {
        title: "Vehicle Verification",
        path: "/Verification/Vehicleverification",
        icon: <ListCheck size="30" />,
      },
    ],
  },
];
