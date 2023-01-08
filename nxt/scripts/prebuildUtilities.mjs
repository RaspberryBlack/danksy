import * as dotenv from 'dotenv';
import fs from "fs";
import {DrupalJsonApiParams} from "drupal-jsonapi-params";
import { DrupalClient } from "next-drupal";
import fetch from 'cross-fetch';

dotenv.config({ path: `.env.local` });
const drupal = new DrupalClient(process.env.NEXT_PUBLIC_DRUPAL_BASE_URL, {
  fetcher: fetch,
});


export const preBuildDevelopment = async() => {
  const params = new DrupalJsonApiParams()
    .addFilter("status", "1")
    .addInclude(["field_image","field_type","field_set"])
    .addFields("node--artwork", ["title","body","field_image","path","created","promote","field_type","field_width","field_height","field_depth","field_price","field_material","field_set"])
    .addFields("file--file", ["id", "uri", "resourceIdObjMeta","links","created"])
    .addFields("taxonomy_term--type", ["name"])
    .addFields("taxonomy_term--set", ["name"])
    .addSort('sticky', 'DESC')
    .addSort('created', 'DESC')

  const artwork = await drupal.getResourceCollection("node--artwork",{
    params: params.getQueryObject(),
  });

  fs.writeFileSync("./data/artwork.json", JSON.stringify(artwork));
}
